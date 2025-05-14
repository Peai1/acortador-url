package com.url.shortener.models;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "click_event")
public class ClickEvent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDateTime clickDate;

    @ManyToOne // MANY click events can be related to ONE url mapping
    @OnDelete(action = OnDeleteAction.CASCADE)
    @JoinColumn(name = "url_mapping_id")
    private UrlMapping urlMapping;
}
